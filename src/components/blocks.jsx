import { useEffect, useState } from "react";
const components = import.meta.glob("../components/**/*.jsx", {
  eager: true,
});

export default function Blocks({ contentBlocks, dataBinding }) {
  const [blocks, setBlocks] = useState(contentBlocks);

  const onCloudCannonLoad = (CloudCannon) => {
    CloudCannon.enableEvents();
    loadNewPropsFromCloudCannon(CloudCannon);
  };

  const loadNewPropsFromCloudCannon = async (CloudCannon) => {
    try {
      const latestValue = await CloudCannon.value({
        keepMarkdownAsHTML: false,
      });
      setBlocks(latestValue.content_blocks ?? []);
    } catch (fetchError) {
      console.warn("Failed to fetch latest page props", fetchError);
    }
  };

  useEffect(() => {
    const loadListener = (e) => onCloudCannonLoad(e.detail.CloudCannon);
    const updateListener = (e) =>
      loadNewPropsFromCloudCannon(e.detail.CloudCannon);
    document.addEventListener("cloudcannon:load", loadListener);
    document.addEventListener("cloudcannon:update", updateListener);
    if (window.CloudCannon) {
      onCloudCannonLoad(window.CloudCannon);
    }

    return () => {
      document.removeEventListener("cloudcannon:load", loadListener);
      document.removeEventListener("cloudcannon:update", updateListener);
    };
  }, []);

  return blocks.map((block, i) => {
    const name = `./${block._bookshop_name}.jsx`;
    const Component = components[name].default;
    return (
      <Component
        block={block}
        key={i}
        dataBinding={dataBinding ? `${dataBinding}[${i}]` : null}
      />
    );
  });
}
