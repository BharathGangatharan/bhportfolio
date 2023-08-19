import React,{useEffect} from 'react';
import {Line} from 'react-chartjs-2'
import './LineChart.css'
import {Chart as ChartJS} from 'chart.js/auto'
import {Chart} from 'react-chartjs-2'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


const LineChart = () => {

    const {ref, inView} = useInView({
        threshold: 0.2
      });
    const animation = useAnimation();
    const animation2 = useAnimation();

    useEffect(()=>{
        if(inView){
    
          animation.start({
            opacity: 1,
            x: 0,
            transition : {
                delay: 0.5,
                duration: 1,
                type:"spring",
            }
          })
          animation2.start({
            opacity: 1,
            x: 0,
            transition : {
                delay: 0.8,
                duration: 1,
                type:"spring",
            }
          })

        }

        if(!inView){
            animation.start({
                opacity: 0,
                x: '-100vw',           
            })

            animation2.start({
                opacity: 0,
                x: '100vw',           
            })
        }

    },[inView])

    const data={
        labels:['10th','12th','1st Sem','2nd Sem','3rd Sem','4th Sem','5th Sem', '6th Sem','7th Sem','8th Sem'],
        datasets:[
            {
                label:'Graph',
                color:'#7585a1',
                data:[95.4,90,78,72,73,77,78,88,88.3,88.4],
                fill: false,
                borderColor:['rgba(19, 67, 108, 1)'],
                pointBackgroundColor:['rgba(251, 83, 97, 1)'],
                tension: 0.1,
                hoverRadius:5,
                radius:4,
                borderWidth:2
                
            }
        ]
    }

    const options={
        scales:{
            x:{
                ticks:{
                    color: '#0c2e69'
                }
            },
            y:
                {
                    ticks:{
                        color:'tomato',
                        min:50,
                        max:100,
                        stepSize:5
                    }
                }
            
        }
    }

  return(
      <div className='chart_main' ref={ref}>
        <div className='chart'>
            <motion.div className='chart_heading' animate={animation}>
                <h2>MY ACADEMICS</h2>
            </motion.div>
            <motion.div className='chart_line' animate={animation2}>
                <Line data={data} options={options}/>
            </motion.div>
        </div>
      </div>
  )};

export default LineChart;
