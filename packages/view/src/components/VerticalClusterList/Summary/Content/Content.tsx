import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

import type { ContentProps } from "../Summary.type";

const Content = ({ content, clusterId, selectedClusterId }: ContentProps) => {
  return (
    <>
      <div className="cluster-summary__contents">
        <span className="commit-message">{content.message}</span>
        <span className="more-commit-count">
          {content.count > 0 && `+ ${content.count} more`}
        </span>
      </div>
      <div className="collapsible-icon">
        {selectedClusterId.includes(clusterId) ? (
          <IoIosArrowDropupCircle className="show" />
        ) : (
          <IoIosArrowDropdownCircle />
        )}
      </div>
    </>
  );
};

export default Content;
