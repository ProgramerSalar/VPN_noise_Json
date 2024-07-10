import jsonServer from 'json-server'
import json_data from './db.json' assert {type: 'json'}
import fs from 'fs'
import path from 'path'

import {app} from "./app.js"
import { type } from 'os'
import Razorpay from "razorpay"
import cors from "cors"
import express from "express"


export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

// const server = jsonServer.create()
// const middlewares = jsonServer.defaults()

const router = jsonServer.router(json_data)
const middlewares = jsonServer.defaults()

app.use(middlewares)
app.use('/', router)

// express server 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))


const port = process.env.PORT
// console.log("port", port)





app.listen(port, () => {
    console.log("Json server is running.....")
})