declare module "*.png";

declare module "imageType" {
  type tImage = {
    name: string;
    source: string;
  };
}

module.exports = {
  tImage,
};
