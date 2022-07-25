export const hasFeatureFlag = (featureName) => {
  return localStorage.getItem(featureName);
};

export const hasAboutPageFeature = hasFeatureFlag("aboutPage");
