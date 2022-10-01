import { useState } from "react";
import { useEffect } from "react";
import { useStorage } from "../../contexts/userContext";
import { useMultipleQuery } from "../../hooks/useMultipleQuery";
import CollectionList from "../CardList/CollectionList";

export default function Archive() {
  const { watchState, userState } = useStorage();
  const willWatch = watchState.watching
    .filter((ent) => ent.value === "willWatch")
    .map((ent) => ent.id);
  const maybeWatching = watchState.watching
    .filter((ent) => ent.value === "maybeWatching")
    .map((ent) => ent.id);
  const notWatching = watchState.watching
    .filter((ent) => ent.value === "notWatching")
    .map((ent) => ent.id);

  const [willWatchAni, setWillWatchAni] = useState();
  const [maybeWatchingAni, setMaybeWatchingAni] = useState();
  const [notWatchingAni, setNotWatchingAni] = useState();

  useEffect(() => {
    useMultipleQuery(willWatch).then((data) => setWillWatchAni(data));

    useMultipleQuery(maybeWatching).then((data) => setMaybeWatchingAni(data));

    useMultipleQuery(notWatching).then((data) => setNotWatchingAni(data));
  }, [watchState]);

  return (
    <main className="text-textTitle relative">
      <div className="mt-0 md:-mt-20 mx-3 md:mx-32 lg:mx-12 2xl:mx-48 mb-10">
        <CollectionList
          name="Watching"
          dataAni={willWatchAni}
          skeleton={9}
          key="Watching"
          language={userState.language}
        />
        <CollectionList
          name="Maybe Watching"
          dataAni={maybeWatchingAni}
          skeleton={9}
          key="Maybe Watching"
          language={userState.language}
        />
        <CollectionList
          name="Not Watching"
          dataAni={notWatchingAni}
          skeleton={9}
          key="Not Watching"
          language={userState.language}
        />
      </div>
    </main>
  );
}
