const components = import.meta.glob("../../components/**/*.jsx", {
  eager: true,
});

export default function Blocks({ contentBlocks }) {
  return (
    <main>
      {contentBlocks.map((block, i) => {
        const name = `../../components/${block._bookshop_name}.jsx`;
        const Component = components[name].default;
        return <Component {...block} key={i} />;
      })}
    </main>
  );
}
