module.exports = function override(config) {
  // Suppress source-map-loader warnings from @mediapipe (missing/misnamed .map files)
  config.ignoreWarnings = [
    function ignoreSourceMapWarnings(warning) {
      return (
        warning.module &&
        warning.module.resource &&
        warning.module.resource.includes('@mediapipe')
      );
    },
  ];

  return config;
};
