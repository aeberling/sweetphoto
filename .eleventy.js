module.exports = function(eleventyConfig) {
  // Pass through all assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Pass through any standalone files
  eleventyConfig.addPassthroughCopy("webcopy-origin.txt");

  // Watch for changes
  eleventyConfig.addWatchTarget("./src/");

  // Return configuration object
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};