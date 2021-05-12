const elSelect = (parentElement, options) => {
  console.log("elSelect", parentElement, options);

  const setupDomElements = () => {
    const container = document.createElement("div");
    container.classList.add("el-select");

    const selectedValue = document.createElement("div");
    selectedValue.classList.add("selected-value");

    const list = document.createElement("div");
    list.classList.add("list");
    optionsElements = options.availableOptions.map((availableOption) => {
      const element = document.createElement("div");
      element.innerText = availableOption.name;
      element.dataset.id = availableOption.id;
      element.classList.add("list-option");
      return element;
    });
    list.append(...optionsElements);

    parentElement.append(container);
    container.append(selectedValue);
    container.append(list);
  };

  setupDomElements();
};
