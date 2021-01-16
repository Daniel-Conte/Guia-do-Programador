/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import FormField from './FormField'
import Button from './Button'

export default props =>
    <div className="form">
        <div className="row">
            <FormField inputName="name" labelName="Nome" placeholder="Digite o nome..." value={props.nameValue} change={props.change}/>

            <FormField inputName="email" labelName="E-mail" placeholder="Digite o e-mail..." value={props.emailValue} change={props.change}/>
        </div>

        <hr/>

        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <Button class="btn btn-primary" name="Salvar" click={props.save}/>
                <Button class="btn btn-secondary ml-2" name="Cancelar" click={props.cancel}/>
            </div>
        </div>
    </div>