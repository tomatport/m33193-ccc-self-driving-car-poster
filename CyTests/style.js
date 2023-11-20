const style = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.1",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "default",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "font-size" : 12,
      "font-family" : "SansSerif.plain",
      "font-weight" : "normal",
      "border-width" : 0.0,
      "text-valign" : "center",
      "text-halign" : "center",
      "background-opacity" : 1.0,
      "shape" : "ellipse",
      "border-color" : "rgb(204,204,204)",
      "text-opacity" : 1.0,
      "border-opacity" : 1.0,
      "height" : 35.0,
      "background-color" : "rgb(0,0,0)",
      "width" : 35.0,
      "color" : "rgb(255,255,255)",
      "content" : "data(name)"
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "color" : "rgb(0,0,0)",
      "source-arrow-color" : "rgb(0,247,255)",
      "target-arrow-color" : "rgb(0,247,255)",
      "target-arrow-shape" : "none",
      "width" : 10.0,
      "line-style" : "solid",
      "source-arrow-shape" : "none",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "opacity" : 1.0,
      "font-size" : 10,
      "text-opacity" : 1.0,
      "line-color" : "rgb(0,247,255)",
      "content" : "data(Weight)"
    }
  }, {
    "selector" : "edge[Weight > 685]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge[Weight = 685]",
    "css" : {
      "width" : 30.0
    }
  }, {
    "selector" : "edge[Weight > 60][Weight < 685]",
    "css" : {
      "width" : "mapData(Weight,60,685,10.0,30.0)"
    }
  }, {
    "selector" : "edge[Weight = 60]",
    "css" : {
      "width" : 10.0
    }
  }, {
    "selector" : "edge[Weight < 60]",
    "css" : {
      "width" : 1.0
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]