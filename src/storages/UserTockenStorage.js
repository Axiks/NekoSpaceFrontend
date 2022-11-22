import React, { useEffect, useState } from "react";

const useUserTockenStorage = (fallbackState) => {
  const storageKey = "UserJwtToket"

  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(storageKey)) ?? fallbackState
  );

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export default useUserTockenStorage;