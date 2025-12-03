function drawViz(data) {
  const el = document.getElementById("viz");
  el.innerHTML = `<h2>${data.fields[0].name}: ${data.data[0][0]}</h2>`;
}

dscc.subscribeToData(drawViz, {transform: dscc.tableTransform});
