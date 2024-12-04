import React from 'react'
import { Link } from 'react-router-dom'
import SimulacaoWokwi from '../../assets/wokwi.png'
import ButtonHome from '../../components/ButtonHome/ButtonHome'
import Dashboard from '../../assets/dash.png'
import WebSite from '../../assets/site.png'
import IoT from '../../assets/iot.png'

const About = () => {

    const link_github_dash = 'https://github.com/NicolasHaubricht/EcoBreathe-Dashboard'
    const link_wokwi_simulacao = 'https://wokwi.com/projects/415723189766588417'
    
    return (
        // Este projeto tem como objetivo o monitoramento da qualidade do ar em grandes centros urbanos.
        <main className='min-h-dvh flex w-full justify-center bg-off-white z-50'>
            <section className='flex flex-col p-8 w-11/12 lg:w-10/12 mt-10 gap-9'>
                <div className='w-full flex flex-col items-center gap-2'>
                    <h1 className='uppercase font-light text-center text-4xl'>Sobre o Projeto</h1>
                </div>

                <div className='flex flex-col gap-1'>
                    <h2 className='text-xl font-semibold' >EcoBreathe</h2>
                    <p className='text-justify'>O EcoBreathe é um projeto de monitoramento ambiental que coleta dados de <strong className='font-medium'>temperatura</strong>, <strong className='font-medium'>umidade</strong> e <strong className='font-medium'>partículas PM10</strong> e <strong className='font-medium'>PM2.5</strong> em tempo real, utilizando um <strong className='font-medium'>ESP32</strong> integrado a sensores. Os dados são transmitidos via Wi-Fi para uma máquina virtual e processados para análises detalhadas em formato de dashboards. Com foco em grandes centros urbanos, o sistema fornece dados sobre a qualidade do ar, auxiliando na conscientização, no planejamento de ações ambientais e na promoção de saúde pública. Neste projeto foi utilizada uma Máquina Virtual da AWS Linux Ubuntu 22.04</p>
                </div>

                {/* <div className='flex flex-col gap-1'>
                    <h2 className='text-xl font-semibold'>Entendendo Back-End</h2>

                    <h3 className='text-lg font-medium mt-3'>Uso do ESP32 como Dispositivo IoT</h3>
                    <p className='text-justify'>O <strong className='font-medium'>ESP32</strong> é o componente central do projeto, configurado como um dispositivo IoT para coleta de dados ambientais, como <strong className='font-medium'>temperatura</strong> e <strong className='font-medium'>umidade</strong>, utilizando o sensor <strong className='font-medium'>DHT22</strong>. Ele se conecta a uma rede Wi-Fi para transmitir as leituras em tempo real via protocolo <strong className='font-medium'>MQTT</strong>, comunicando-se com um broker. Essa arquitetura permite que os dados coletados sejam processados, armazenados e disponibilizados para visualização, promovendo a eficiência no monitoramento ambiental.</p>
                
                    <h3 className='text-lg font-medium mt-3'>Visualização e Análise dos Dados</h3>
                    <p className='text-justify'>A interface gráfica do projeto é desenvolvida em <strong className='font-medium'>Dashboards</strong> e oferece uma experiência interativa para os usuários. Os dados de temperatura e umidade são exibidos em <strong className='font-medium'>gráficos</strong> que mostram as variações ao longo do tempo. Além disso, cálculos como médias de temperatura e umidade são realizados, ajudando a identificar padrões ou anomalias. Essa integração fornece uma solução completa para monitoramento ambiental, com foco na usabilidade e clareza das informações.</p>
                </div> */}


                {/* Line 1 */}
                <div className='flex gap-4 w-full items-center justify-around flex-wrap'>
                    {/* Wokwi */}
                    <div className='flex flex-col items-center gap-3'>
                        <h2 className='text-xl font-semibold'>Projeto no Wokwi</h2>
                        <img className='md:h-64 w-auto rounded-2xl' src={SimulacaoWokwi} alt="Simulação Wokwi" />
                        <Link to={link_wokwi_simulacao} target='_blank'>
                            <ButtonHome text_btn={'Veja a Simulação'}/>
                        </Link>
                    </div>
                    {/* Dashboard */}
                    <div className='flex flex-col items-center gap-3'>
                        <h2 className='text-xl font-semibold'>Dashboard</h2>
                        <img className='md:h-64 w-auto rounded-2xl' src={Dashboard} alt="Simulação Wokwi" />
                        <Link to={link_github_dash} target='_blank'>
                            <ButtonHome text_btn={'Veja o Repositório'}/>
                        </Link>
                    </div>
                </div>

                {/* Line 2 */}
                <div className='flex gap-4 w-full items-center justify-around flex-wrap'>
                    {/* IoT */}
                    <div className='flex flex-col items-center gap-3'>
                        <h2 className='text-xl font-semibold'>Dispositivo IoT</h2>
                        <img className='md:h-64 w-auto rounded-2xl' src={IoT} alt="Simulação Wokwi" />
                        <Link to={link_github_dash} target='_blank'>
                            <ButtonHome text_btn={'Veja o Repositório'}/>
                        </Link>
                    </div>
                    {/* Web Site */}
                    <div className='flex flex-col items-center gap-3'>
                        <h2 className='text-xl font-semibold'>Web Site</h2>
                        <img className='md:h-64 w-auto rounded-2xl' src={WebSite} alt="Simulação Wokwi" />
                        <Link to={link_wokwi_simulacao} target='_blank'>
                            <ButtonHome text_btn={'Veja o Repositório'}/>
                        </Link>
                    </div>
                </div>
                {/* Informações Adicionais */}
                <div className='flex flex-col gap-3'>
                    <h3>Informações adicionais!</h3>
                    
                    <p> <strong>*</strong> Para que o projeto esteja disponível de forma prática, os dados coletados não podem depender exclusivamente da Máquina Virtual, que precisaria estar constantemente ligada, o que é inviável. Por isso, as informações são armazenadas em um arquivo JSON, permitindo acesso mais fácil e eficiente aos dados sem necessidade de uma infraestrutura ativa o tempo todo.</p>

                    <p> <strong>*</strong> O DHT22 é um sensor capaz de medir temperatura e umidade, mas não possui a funcionalidade de coletar dados sobre partículas como PM10 e PM2.5. No caso do projeto, como o simulador utilizado não suporta dispositivos específicos para medir tais partículas, esses valores foram simulados para complementar os dados ambientais coletados, oferecendo uma visão mais abrangente sobre a qualidade do ar.</p>
                </div>
            </section>
        </main>
    )
}

export default About