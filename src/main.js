const businessCardJSON = [
  {
    products: [
      // <-- ARRAY!
      {
        title: "Front",
        thumbnail:
          "https://d3g7hp6owqj5vv.cloudfront.net/templates_library/shirts_men_standard/preview_men_standard_front-1.png", // optional
        elements: [
          {
            type: "image",
            source:
              "https://d3g7hp6owqj5vv.cloudfront.net/templates_library/shirts_men_standard/Tshirt2-Front-Base.svg",
            x: 0,
            y: 0,
            width: 600,
            height: 350,
            draggable: false,
            removable: false,
          },
          {
            type: "text",
            text: "Your Name",
            x: 100,
            y: 150,
            fontSize: 24,
            font: "Arial",
            color: "#000000",
          },
        ],
      },
    ],
  },
];
console.log(businessCardJSON);

const fpd = new FancyProductDesigner(document.getElementById("fpd-target"), {
  productsJSON: businessCardJSON,
  stageWidth: 600,
  stageHeight: 350,
  customTextParameters: {
    colors: true,
    removable: true,
    resizable: true,
    draggable: true,
  },
  customImageParameters: {
    draggable: true,
    removable: true,
    resizable: true,
  },
  fonts: ["Arial", "Times New Roman", "Courier", "Helvetica"],
});
console.log(fpd);

fpd.addEventListener("ready", () => {
  console.log("ready");
});
