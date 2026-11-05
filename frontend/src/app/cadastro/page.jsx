"use client";
import "@/app/cadastro/cadastro.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
export default function Cadastro(){


    return(
        <>
        
        <section className="page-login">
            
            <div className="lado-esquerdo">

               <div className="img-lado-esquerdo">
                <img className="img-logo" src="imagens/logo.png" alt="" />
               </div>
                
                <div className="text-lado-esquerdo">
                    <h1>Faça parte de uma <span className="quebra-linha">comunidade mais segura.</span></h1>
                    <p>Registre e acompanhe relatos de ocorrências<span className="quebra-linha">por região, contribuindo para uma cidade</span><span>mais informada e segura.</span></p>
                </div>
                    
                    <div className="icon-lado-esquerdo">
            
                        <div className="icon">

                        <i className="bi bi-geo-alt"></i>
                        <h3>Mapa interativo</h3>
                        <p>Visualize relatos por <span className="quebra-linha">localização.</span></p>

                        </div>

                        <div className="icon">
                            
                        <i className="bi bi-file-earmark-plus"></i>   
                        <h3>Registre relatos</h3>
                        <p>Visualize relatos por <span className="quebra-linha">localização.</span></p>

                        </div>

                        <div className="icon">

                        <i className="bi bi-shield-check"></i>
                        <h3>Mais segurança</h3>
                        <p>Visualize relatos por <span className="quebra-linha">localização.</span></p>   

                        </div>
                    </div>
            </div>

            <div className="lado-direito">

                <div className="container-info-lado-direito">
                <div className="text-lado-direito">
                    <h2>Crie sua conta</h2>
                    <p>Prencha os dados abaixo para começar <span className="quebra-linha">a usar a AlertABC.</span></p>
                </div>
                <div className="forms-login">
                    <form action="">
                    <div className="inputs">
                        <p>Nome completo</p>
                        <input className="input-person" type="text" placeholder="Digite seu nome completo"/>
                    </div>
                    <div className="inputs">
                        <p>E-mail</p>
                        <input className="input-person" type="email" placeholder="Digite seu e-mail"/>
                    </div>
                    <div className="inputs">
                        <p>Senha</p>
                        <input className="input-person" type="password" placeholder="Digite sua senha"/>
                    </div>
                    <div className="inputs">
                        <p>Confirmar senha</p>
                        <input className="input-person" type="confirm-password" placeholder="Confirme sua senha"/>
                    </div>
                    
                   

                    <div className="botao-acao-container">
                        <div className="botao-acao">
                            <a href="#">Criar uma conta  <i class="bi bi-arrow-right"></i></a>
                        </div>
                        
                        
                        
                    </div>                                    
                    </form>

        
                </div>
                </div>

            </div>
           </section>
        </>
    );
}