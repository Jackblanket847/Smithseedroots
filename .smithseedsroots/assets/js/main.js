/* Client Traffic Flow Controller */
(function () {
  const Ruleset = {
    throttleClicks: true,
    maxClicksPerSecond: 5,
    logNavigation: true
  };

  let clickCount = 0;
  setInterval(() => (clickCount = 0), 1000);

  document.addEventListener("click", () => {
    clickCount++;
    if (Ruleset.throttleClicks && clickCount > Ruleset.maxClicksPerSecond) {
      event.preventDefault();
      console.warn("Traffic rule enforced: click throttled");
    }
  });
})();