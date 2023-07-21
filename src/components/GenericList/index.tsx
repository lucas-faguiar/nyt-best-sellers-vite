import { FC } from "react";
import "./styles.css";

interface GenericListProps<T> {
  items: T[];
  itemName: string;
  itemComponent: FC<GenericItemProps<T>>;
  onSelectItem: (index: number) => void;
  activeIndex: number;
}

export interface GenericItemProps<T> {
  item: T;
  index: number;
  active: number;
  onClick: () => void;
}

function GenericList<T>(props: GenericListProps<T>) {
  const {
    items,
    itemName,
    itemComponent: ItemComponent,
    onSelectItem,
    activeIndex,
  } = props;
  return (
    <div className="generic-list fadeIn">
      <h2>{itemName}</h2>
      <div className="generic-list-body">
        {items.length === 0 ? (
          <div className="generic-list-empty">
            <h3>{`No ${itemName.toLowerCase()} found`}</h3>
          </div>
        ) : (
          <div className="generic-list-body-items-container">
            {items.map((item, index) => (
              <ItemComponent
                item={item}
                index={index}
                active={activeIndex}
                onClick={() => onSelectItem(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GenericList;
