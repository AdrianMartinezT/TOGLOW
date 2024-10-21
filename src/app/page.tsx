'use client';
import TransactionWrapper from 'src/components/TransactionWrapper';
import WalletWrapper from 'src/components/WalletWrapper';
import { ONCHAINKIT_LINK } from 'src/links';
import OnchainkitSvg from 'src/svg/OnchainkitSvg';
import { useAccount } from 'wagmi';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import NavbarComponent from '../components/Navbar'; 
import Sidebar from '../components/Sidebar'; 
import Contribuidores from '../components/Contribuidores'; 

export default function Page() {
  const { address } = useAccount();

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      {/* Navbar */}
      <NavbarComponent />

      <div className="flex flex-col md:flex-row flex-grow w-full">
        {/* Sidebar a la izquierda */}
        <div className="md:w-1/4 w-full p-4 bg-white border-r">
          <Sidebar />
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col md:w-3/4 w-full p-4">
          <section className="templateSection flex flex-col items-center justify-center gap-4 rounded-xl bg-gray-100 px-2 py-4 md:grow">
            {/* Contribuidores */}
            <Contribuidores />
  

           
          </section>
        </div>
      </div>
    </div>
  );
}
