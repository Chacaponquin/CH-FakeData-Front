import React, { useContext } from "react";
import { DatasetsContext } from "../../../../../shared/context/DatasetsContext";
import { DATA_TYPES } from "../../../../../shared/helpers/datasetsUtils";

const FieldTypeButton = ({ field, handleOpenModal }) => {
  const { datasets } = useContext(DatasetsContext);

  const pipeText = () => {
    let text = "";

    if (field.dataType.type === DATA_TYPES.REF) text += filterFields();
    else if (field.dataType.type === DATA_TYPES.CUSTOM) text += "Custom";
    else if (field.dataType.type === DATA_TYPES.SINGLE_VALUE)
      text += field.dataType.fieldType.type.name;

    return (text += field.isArray ? "[ ]" : "");
  };

  const filterFields = () => {
    let value = "";

    for (const dat of datasets) {
      value = "";

      if (dat.id === field.dataType.datasetID) {
        value += dat.name;
        for (const f of dat.fields) {
          if (f.id === field.dataType.fieldRef) {
            value += "/" + f.name;
            break;
          }
        }

        break;
      }
    }

    return "" + value;
  };

  return (
    <div className="px-6">
      {field.dataType ? (
        <button
          className="bg-principal-bg text-white py-2 px-10 text-lg rounded-md w-[180px] whitespace-nowrap esm:px-5 esm:text-base esm:w-[150px]"
          type="button"
          onClick={() => handleOpenModal(field.id)}
        >
          {pipeText()}
        </button>
      ) : (
        <button
          className="bg-principalColor text-white py-2 px-10 text-lg rounded-md w-[180px] esm:px-5 esm:text-base esm:w-[150px]"
          type="button"
          onClick={() => handleOpenModal(field.id)}
        >
          Type
        </button>
      )}
    </div>
  );
};

export default FieldTypeButton;
