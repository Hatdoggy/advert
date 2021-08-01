import {useEffect,useState} from 'react';
import lang from './language.json'
import addNode,{ActionRedirect} from './function.js'
import { useMediaQuery } from 'react-responsive';

const {qna,intro,prod,mes,final} = lang; 
const clr = ["btn-grn","btn-ylw","btn-wht"];

const Circ = ()=>{
	return(
		<div className="pos-abs w-vw h-vh z-bg">
			<span className="circ fade pos-abs circ-tr"></span>
			<span className="circ fade pos-abs circ-br"></span>
			<span className="circ fade pos-abs circ-tl"></span>
			<span className="circ fade pos-abs circ-bl"></span>
		</div>
	);
}

const Prog = ()=>{
	return(
		<div className="flx flx-jc-ce flx-ai-ce w-100 m-t-5">
			<span className="trans prog prog-crc"></span>
			<span className="trans prog prog-lne m-l-2 m-r-2"></span>
			<span className="trans prog prog-crc"></span>
			<span className="trans prog prog-lne m-l-2 m-r-2"></span>
			<span className="trans prog prog-crc"></span>
			<span className="trans prog prog-lne m-l-2 m-r-2"></span>
			<span className="trans prog prog-crc"></span>
		</div>
	)
}

const QnA = (props)=>{

	let x = props.ctr+1;

	useEffect(()=>{
		let crc = document.querySelectorAll('.prog-crc');
		let lne = document.querySelectorAll('.prog-lne');
		let anim = document.querySelectorAll('.anim');

		props.ctr<4&&crc[props.ctr].classList.add('bg-grn');
		props.ctr<3&&lne[props.ctr].classList.add('bg-grn');		
			anim.forEach(elem=>{
				elem.classList.add('.fade-r')
			})
	})

	const inc = ()=>{
		let anim = document.querySelectorAll('.anim');

		if(props.ctr<3){
			props.upd({
				show:true,
				ctr:props.ctr+1
			})
			anim.forEach((elem,ndx)=>{
				elem.classList.remove('fade-r')
				setTimeout(()=>{
					elem.classList.add('fade-r')
				},(100*ndx))
			})
		}else{
			props.fin(true)		
		}		
	}

	return(
		<div className="flx flx-col flx-jc-ce flx-ai-ce m-t-2 quest">
			<h4 className="mont fade-r">Question {x} of 4</h4>
			<p className="lato fade-r anim">{qna[3].quest}</p>
			{qna[props.ctr].choice.map((txt,ndx)=>(
				<button key={ndx} className={`p-20 btn w-100 trans m-t-2 mont anim fade-r ${clr[ndx]}`} onClick={inc}>{txt}</button>
			))}
		</div>
	)
}

const Process = ()=>{

	const [fin,updFinal] = useState(false);

	useEffect(async()=>{
		addNode(1)
		setTimeout(()=>updFinal(true),4500);
	},[])

	return(
		fin?
		<div className="flx flx-col flx-ai-ce flx-jc-ce h-100 fade">
				<div className="flx flx-col flx-ai-ce flx-jc-ce w-80 fade">
					<p className="lato txt-ylw">{final.action}</p>
					<p className="lato txt-wht txt-al-ce">{final.mes}</p>				
				</div>
				<button className="mont btn w-50 btn-ylw p-20 m-t-5 fade product-button" data-product-id="1" onClick={ActionRedirect}>{final.btn}</button>
		</div>
		:
		<div className="flx flx-col flx-ai-ce flx-jc-ce txt-wht fade">

			<h4 className="mont txt-grn">PROCESSING DETAILS</h4>
			<p className="lato">Preparing your details for shipment please wait a moment</p>

			<div className="flx flx-jc-sp flx-ai-ce w-30 m-t-5" id="cont"></div>

		</div>
	)
}

const Info = (prop)=>{

	const upd = ()=>{
		prop.upd({
			ctr:prop.ctr,
			show:true
		})		
	}

	return(
			<div className="flx flx-col flx-ai-ce flx-jc-sb h-100">
				{(!prop.show&&!prop.small)&&<h4 className="mont">{intro.id}</h4>}

				<div className="flx flx-col flx-ai-ce flx-jc-ce w-100">
					<p className="lato txt-grn">{mes.head}</p>
					<p className="lato txt-wht txt-al-ce">{mes.message}</p>				
				</div>
				{prop.show?
					<QnA show={prop.show} ctr={prop.ctr} upd={prop.upd} fin={prop.fin} small={prop.small}/>
					:
					<button className="mont btn w-50 btn-grn p-20" onClick={upd}>ANSWER NOW</button>
				}
			</div>
	)
}

const Desc = (prop)=>{

	const [fin,showFin] = useState(false)
	
	return(
		<div className="txt-wht flx flx-ai-ce flx-jc-ce p-20 bg-qna h-70 w-100 fade ovr-hide">
		{fin?
			<Process/>
			:
			<Info show={prop.show} ctr={prop.ctr} upd={prop.upd} fin={showFin} small={prop.small}/>
		}
		</div>
	)
}

const Cont = (prop)=>{

	return(
		<section className="flx flx-col flx-ai-ce flx-jc-sb w-50 h-100 p-50">
			<div className="flx flx-col flx-jc-ce w-100 flx-ai-ce h-30 cong-txt">
				<h2 className="txt-wht mont">Congratulations!</h2>
				<p className="lato txt-wht">{intro.mes}</p>
				<Prog/>
			</div>
			<Desc show={prop.show} ctr={prop.ctr} upd={prop.upd}/>
		</section>
	)
}

const Prod = ()=>{
	return(
		<section className="flx flx-col flx-ai-ce flx-jc-sb txt-wht w-50 bg-prod h-100 p-50">
			<h4 className="mont w-100">{prod.name}</h4>
			<img src="./Samsung.png" alt="samsung" className="w-80 fade"/>
			<footer className="flx p-10 w-100">
				<h4 className="txt-acc mont">{prod.price}</h4>
				<h4 className="txt-grn m-l-auto mont">{prod.disc}</h4>
			</footer>
		</section>
	)
}

/* Mobile */

const Intro = (prop) =>{

	const [show,updShow] = useState(false)

	useEffect(()=>{
		setTimeout(()=>updShow(true),2500);
	})

	return(
		show?
		<section className="w-50 h-100 p-50 fade ovr-scr-y">
			<Prog/>
			<Desc show={prop.show} ctr={prop.ctr} upd={prop.upd} small={prop.small}/>
		</section>		
		:
		<section className="flx flx-col flx-ai-ce flx-jc-ce w-50 h-50 p-50">
			<div className="flx flx-col flx-jc-ce w-100 flx-ai-ce h-30 cong-txt fade">
				<h2 className="txt-wht mont">Congratulations!</h2>
				<p className="lato txt-wht txt-al-ce">{intro.mes}</p>
			</div>
			<h4 className="mont fade txt-wht txt-al-ce m-t-5">{intro.id}</h4>
		</section>
	)
}

const Load = (props)=>{

	const [txt,changeTxt] = useState(false);

	useEffect(()=>{
		 setTimeout(async()=>{
			await changeTxt(true)
			setTimeout(()=>props.load(true),1000)
		},1500)
	},[])

	return(
		<div className="h-100 w-100 flx flx-jc-ce flx-ai-ce pos-rel">
			<img src="./Samsung.png" alt="samsung" className="z-neg pos-abs loadImg fade"/>
			{txt?
				<h1 className="mont txt-wht fade-l trans">S21</h1>
				:
				<h1 className="mont txt-wht fade-l trans">SAMSUNG</h1>
			}
		</div>
	)
}

const Main = (props)=>{

  	const small = useMediaQuery({
    	query: '(max-width : 1000px)'
  	}) 

	useEffect(()=>{

		if(!small&&props.loaded){
			let crc = document.querySelectorAll('.prog-crc');
			let lne = document.querySelectorAll('.prog-lne');

			props.ctr<4&&crc[props.ctr].classList.add('bg-grn');
			props.ctr<3&&lne[props.ctr].classList.add('bg-grn');			
		}

	},[])

	return(
	props.load?
		<main className="h-100 flx flx-jc-ce flx-ai-ce pos-rel trans fade">			
			<Prod/>
			{
				small?
				<Intro show={props.show} ctr={props.ctr} upd={props.upd} small={small}/>
				:
				<Cont show={props.show} ctr={props.ctr} upd={props.upd}/>	
			}
		</main>		
		:
		<Load load={props.set}/>
	
	)
}

export default Main;

export {Circ}