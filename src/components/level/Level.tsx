import React from "react"
import { useContext } from "react"
import { LevelContext } from "../../context/level"

export const LevelComponent = () => {
    const level = useContext(LevelContext);
    return <div>{level}</div>
}