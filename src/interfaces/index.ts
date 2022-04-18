import { FC, LazyExoticComponent } from "react";
import { Navigate } from 'react-router-dom';

export type JSXComponent = () => JSX.Element;
export type LazyComponent = LazyExoticComponent<JSXComponent>;

export interface RouteParent {
  path?: string;
  Layout: LazyComponent | JSXComponent | FC;
  children: RouteChild[];
};

export interface RouteChild {
  to?: string;
  path: string;
  Component: LazyComponent | JSXComponent | FC;
};

export interface Nav {
  name: string;
  to: string;
  Icon?: JSX.Element | any;
}