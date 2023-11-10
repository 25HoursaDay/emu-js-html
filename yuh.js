  var params = new URLSearchParams(
    function() {
      (document.currentScript.src !== (undefined || null || "")) ? document.currentScript.src.search: document.location.search;
    }
  );
  var value = params.get("sf");
  console.log(value);
