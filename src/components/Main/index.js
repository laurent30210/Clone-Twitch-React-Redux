// == Import npm
import React, { useEffect, useState} from 'react';
import SectionTopStreamers from 'src/containers/SectionTopStreamers';
import SectionLiveStreamers from 'src/containers/SectionLiveStreamers';
import SectionCatStreamers from 'src/containers/SectionCatStreamers';
import SectionChannelStreams from 'src/containers/SectionChannelStreams';
// == Import
import './main.scss';
// == Composant
const Main = ({ menuActived }) => {
  const getWidthWindows = () => window.innerWidth;

  const [widthWindow, setWidthWindow] = useState(getWidthWindows());
  const [nbStream, setNbStream] = useState(0);
  const [nbCat, setNbCat] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidthWindow(getWidthWindows());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const width = widthWindow;
    const WIDTHSTREAM = 316;
    const WIDTHCAT = 163;
    const PADDINGMENUON = 60;
    const PADDINGMENUOFF = 260;
    const WIDTHWINDOW = width - (menuActived ? PADDINGMENUON : PADDINGMENUOFF);
    const NBSTREAM = Math.round(WIDTHWINDOW / WIDTHSTREAM);
    const NBCAT = Math.round(WIDTHWINDOW / WIDTHCAT);
    setNbStream(NBSTREAM);
    setNbCat(NBCAT);
  }, [widthWindow, nbStream, nbCat]);

  return (
    <div
      className="main"
      style={{ padding: menuActived && '50px 0 0 50px' }}
    >
      <SectionTopStreamers />
      <SectionLiveStreamers nbStream={nbStream} />
      <SectionCatStreamers nbCat={nbCat} />
      <SectionChannelStreams nbStream={nbStream} />
    </div>
  );
};

// == Export
export default Main;
