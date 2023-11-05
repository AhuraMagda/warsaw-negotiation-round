export const makeArrOfObj = (data) => {
  return data.gallery.edges.map((image, index) => ({
    id: index,
    image: image.node.childImageSharp.gatsbyImageData,
    key: image.node.id,
  }));
};
