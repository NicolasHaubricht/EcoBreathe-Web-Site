import React from 'react'
import { Link } from 'react-router-dom'
import SimulacaoWokwi from '../../assets/wokwi.png'
import Dash from '../../assets/dash.png'
const About = () => {

    const link = 'https://www.eea.europa.eu/pt/help/perguntas-frequentes/o-que-sao-particulas-em'
    return (
        <main className='min-h-dvh flex w-full justify-center bg-off-white z-50'>
            <section className='flex flex-col p-8 w-11/12 lg:w-10/12 mt-10 gap-9'>
                <div className='w-full flex flex-col items-center gap-2'>
                    <h1 className='uppercase font-light text-center md:text-3xl lg:text-4xl'>Sobre o Projeto</h1>
                </div>

                <div className='flex flex-col gap-1'>
                    <h2 className='text-xl font-semibold' >Introdução ao EcoBreathe</h2>
                    <p className='text-justify'>O EcoBreathe é um projeto de monitoramento ambiental que coleta dados de <strong className='font-medium'>temperatura</strong>, <strong className='font-medium'>umidade</strong> e <strong className='font-medium'>partículas PM10</strong> e <strong className='font-medium'>PM2.5</strong> em tempo real, utilizando um <strong className='font-medium'>ESP32</strong> integrado a sensores. Os dados são transmitidos via Wi-Fi para uma máquina virtual e processados para análises detalhadas. Com foco em grandes centros urbanos, o sistema fornece insights sobre a qualidade do ar, auxiliando na conscientização, no planejamento de ações ambientais e na promoção de saúde pública.</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <h2 className='text-xl font-semibold'>Entendendo Back-End</h2>

                    <h3 className='text-lg font-medium mt-3'>Uso do ESP32 como Dispositivo IoT</h3>
                    <p className='text-justify'>O <strong className='font-medium'>ESP32</strong> é o componente central do projeto, configurado como um dispositivo IoT para coleta de dados ambientais, como <strong className='font-medium'>temperatura</strong> e <strong className='font-medium'>umidade</strong>, utilizando o sensor <strong className='font-medium'>DHT22</strong>. Ele se ceoncta a uma rede Wi-Fi para transmitir as leituras em tempo real via protocolo <strong className='font-medium'>MQTT</strong>, comunicando-se com um broker. Essa arquitetura permite que os dados coletados sejam processados, armazenados e disponibilizados para visualização, promovendo a eficiência no monitoramento ambiental.</p>
                
                    <h3 className='text-lg font-medium mt-3'>Visualização e Análise dos Dados</h3>
                    <p className='text-justify'>A interface gráfica do projeto é desenvolvida em <strong className='font-medium'>Dashboards</strong> e oferece uma experiência interativa para os usuários. Os dados de temperatura e umidade são exibidos em <strong className='font-medium'>gráficos</strong> que mostram as variações ao longo do tempo. Além disso, cálculos como médias de temperatura e umidade são realizados, ajudando a identificar padrões ou anomalias. Essa integração fornece uma solução completa para monitoramento ambiental, com foco na usabilidade e clareza das informações.</p>
                </div>

                <div className='flex flex-col gap-1 items-center'>
                    <h2 className='text-xl font-semibold'>Projeto no Wokwi</h2>
                    <img className='sm:w-full md:w-1/2 xl:w-1/4 rounded-2xl' src={SimulacaoWokwi} alt="Simulação Wokwi" />
                    <h2 className='text-xl font-semibold'>Dashboard</h2>
                    <img className='sm:w-full md:w-1/2 xl: rounded-2xl' src={Dash} alt="Simulação Wokwi" />
                </div>

                <div >
                    <h2>Entendendo Front-End</h2>
                    <p></p>
                </div>

                <div className='flex flex-col gap-1'>
                    <h3>Informações adicionais!</h3>
                    <p> * Para o projeto ficar disponivel os dados coletados não poderão ser utilizados por conta da Máquina Virtual necessáriamente estar ligada e isso é inviável então os dados estão em um arquivo JSON.</p>
                    <p> * O DHT22 não coleta dados sobre particulas PM10 e PM2.5, como o simulador não possui tal dispositivo os valores foram simulados.</p>
                </div>
            </section>
        </main>
    )
}

export default About