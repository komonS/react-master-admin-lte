import React from 'react'
import Home from './component/content/Home'
import Header from './component/layout/Header'
import Sidebar from './component/layout/Sidebar'
import { Switch, Route } from "react-router-dom";
import './App.css'
import Footer from './component/layout/Footer';
import Login from './component/content/Login';
export default function App() {
  return (
    <div class="wrapper">
      <Header />

      <Sidebar />
      <div class="content-wrapper">
        <section class="content">
          <div class="container-fluid">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </section>
      </div>
      <Footer />


    </div>
  )
}
