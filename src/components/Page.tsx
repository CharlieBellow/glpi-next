import React, { useEffect} from "react";
import { Menu } from "../components/organisms/Menu";
import { Header } from "../components/organisms/Header";
import RenderCompleted from "../Utils/isMounted"
import Head from "next/head";
interface PageProps extends React.HTMLAttributes<HTMLElement> {
	pagetitle: string;
	contentpage: any;
}

export function Page ( props: PageProps ) {
  
  //const titlePage = typeof window !== "undefined" ? document.title = props.pagetitle: null
//if(typeof window !== "undefined") {
//  document.title = props.pagetitle;
//}

  //const isMounted = RenderCompleted();
  //useEffect( () => {
  //  var documento = document.title ;
  //
  //  documento.title = props.pagetitle
  //
  //}, [ isMounted ] );


	return (
    <>
    

      <Head>
        <title>{props.pagetitle}</title>
      </Head>
			<div className="layout__menu-header bg-white-strong-ice" {...props}>
				<div className="flex max-w-13xl mx-auto" {...props}>
					<div className="flex" {...props}>
						<Menu />
					</div>

					<div className="pageContent w-full h-screen flex flex-col" {...props}>
						<div { ...props } >
							<Header page={props.pagetitle} />
						</div>

						<div {...props} className="content ">
							{props.contentpage}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
