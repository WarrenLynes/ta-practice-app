import React from 'react';
import { useSelector } from 'react-redux';

export default function App() {
  const state = useSelector((state) => state)
  console.log(state);
  return (<h1>hello</h1>)
}