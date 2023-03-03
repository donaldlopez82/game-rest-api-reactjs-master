import React from 'react';
import { Link } from 'react-router-dom';
import background from '../img/escapePod.png';
import Fader from './Fader';

export default function ChapterSix() {
  return (
    <form className="flex justify-content max-w-xs mx-auto mt-5">
      <div className="pt-5">
        <div className="text-center">
          <h1 className="font-link">Zombie Apocalypse</h1>
        </div>

        <br></br>
        <div
          className="pg rounded"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        <div>
          <h4>
            <br></br>
            Making a choice that would surely affect your survivability for the
            better, you decide to open the door and see what's up. Standing in
            the doorway is a crewmate, looking sweaty and disrupted from
            something.<br></br>
            "What's going on?" you ask hesitantly.<br></br>
            "Zombies," he says, breathing heavily, "and they're coming quick.
            Alterra doesn't have a protocol for something like this. We have to
            escape!"<br></br>
            "Zombies?" you ask, very confused.<br></br>
            "There's no time, please come with me!"<br></br>
            You follow the crewmate down the hall to an escape pod. "Wait here
            while I grab one more person," he says. You nod and turn your back
            to the wall so you can see what's going on. As you watch him run
            down a hallway, you begin to hear what sounds like a slight grunting
            or moaning. You realize that there are zombies running down the
            hallway. Your only option is to jump into the escape pod and hope
            that your friend returns soon.<br></br>
            Suddenly, a zombie lays its eyes on you and realizes that you're an
            easy meal. You jump into the escape pod and close the door to shield
            yourself from the zombies. Then, from the other hallway, you see the
            crewmate making his way back to the escape pod, helping a pregnant
            woman, who was most likely a colonist. Since you are already in the
            escape pod, you can be selfish jettison the pod, leaving the
            crewmate and the woman, or you can wait for them to get to the pod
            and hope that they don't die along the way. Do you...
          </h4>
          <div className="container">
            <Link
              to="/ChapterTwelve"
              type="submit"
              className="btn btn-success btn-lg btn-block mt-5 mr-1"
            >
              Jettison the pod?
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/ChapterThirteen"
              type="submit"
              className="btn btn-success btn-lg btn-block mt-5"
            >
              Take them with you?
            </Link>
            <>
              <Fader></Fader>
            </>
            <br></br>
          </div>
        </div>
      </div>
    </form>
  );
}
