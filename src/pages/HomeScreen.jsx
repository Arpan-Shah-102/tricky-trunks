import { useState } from 'react';
import { TitleScreen } from '../components/TitleScreen';
import { LevelSelector } from '../components/LevelSelector';

export function HomeScreen() {
  const [titleScreenShown, setTitleScreenShown] = useState(true);
  return (
    <>
      <TitleScreen
        titleScreenShown={titleScreenShown}
        setTitleScreenShown={setTitleScreenShown}
      />
      <LevelSelector
        titleScreenShown={titleScreenShown}
        setTitleScreenShown={setTitleScreenShown}
      />
    </>
  )
}