import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import "./fruitSelect.css";

const FruitSelect = () => {
  const onValueChange = (value) => {
    console.log("onValueChange", value);
  };
  return (
    <Select.Root onValueChange={onValueChange}>
      <Select.Trigger className="trigger" aria-label="Food">
        <Select.Value placeholder="Select a fruit…" />
        <Select.Icon className="icon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="content">
          <Select.ScrollUpButton className="scrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="viewport">
            <Select.Group>
              <Select.Label className="label">Fruits</Select.Label>
              <Item value="apple">Apple</Item>
              <Item value="banana">Banana</Item>
              <Item value="blueberry">Blueberry</Item>
              <Item value="grapes">Grapes</Item>
              <Item value="pineapple">Pineapple</Item>
            </Select.Group>

            <Select.Separator className="separator" />

            <Select.Group>
              <Select.Label className="label">Vegetables</Select.Label>
              <Item value="aubergine">Aubergine</Item>
              <Item value="broccoli">Broccoli</Item>
              <Item value="carrot" disabled>
                Carrot
              </Item>
              <Item value="courgette">Courgette</Item>
              <Item value="leek">Leek</Item>
            </Select.Group>

            <Select.Separator className="separator" />

            <Select.Group>
              <Select.Label className="label">Meat</Select.Label>
              <Item value="beef">Beef</Item>
              <Item value="chicken">Chicken</Item>
              <Item value="lamb">Lamb</Item>
              <Item value="pork">Pork</Item>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="scrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const Item = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames("item", className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="itemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

export default FruitSelect;
