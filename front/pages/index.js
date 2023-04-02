import Head from 'next/head'
import Image from 'next/image'
import svg from '../public/undraw_scrum_board_re_wk7v.svg'
import {Button, Container} from "react-bootstrap";
import NavBar from './component/navBar';
import Footer from './component/footer';


export default function Home() {
  return (
      <>
          <Head>
              <title>Kanbana | Reinventing Task Management</title>
              <meta name="description" content="Reinventing Task Management" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.png" />
              <link rel="stylesheet" href='../styles/Home.module.css' />
          </Head>
          <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#FFFFFF",
            }}
          >
                <NavBar></NavBar>
                <Container className='d-flex align-items-center container-landing add-space'>
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                        <h1>Introducing Kanbana</h1>
                        <p>Our platform uses AI to automate task management for team projects, assigning tasks based on individual skills and knowledge. Boost productivity and efficiency with intelligent task allocation.</p>
                        <Button variant="outline-primary" style={{width: "300px"}} href="/createProject">Create your first project</Button>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <Image src={svg} className="img-fluid" alt="" data-aos="zoom-out"  />
                    </div>
                </Container>
                <Footer></Footer>
          </div>
      </>
  );
}

