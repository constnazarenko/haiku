import React from 'react';
import './styles.scss';
export function Loading() {
  return (
    <>
      <div className="overlay" />
      <div className="loader-ring">
        <div className="filler">
          <div className="rotate rotate-1" />
          <div className="rotate rotate-2" />
          <div className="rotate-shadow" />
          <div className="scale" />
        </div>
      </div>
    </>
  );
}
