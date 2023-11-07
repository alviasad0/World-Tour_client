

import  { useEffect } from 'react';

const RouteWithTitleUpdate = ({ element, title }) => {
    
  useEffect(() => {
    document.title = `World_Tour | ${title}`;
  }, [title]);

  return element;
};

export default RouteWithTitleUpdate;
