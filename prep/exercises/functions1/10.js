console.log(extractRegion('en_US.UTF-8'));  // 'US'
console.log(extractRegion('en_GB.UTF-8'));  // 'GB'
console.log(extractRegion('ko_KR.UTF-16')); // 'KR'

function extractRegion (locale) {
  let preRegion = locale.split("_")[1];
  let region = preRegion.split(".")[0];
  return region;
}