import React from "react";
import Filho from '/Filho';
export default 
<div>
    <h1> {props.nome}{props.sobrenome}</h1>
    <h2>Filho</h2>
    <ul>
{

React.children.map(props.children,child=>
    {return React.cloneElement(child,)
    .props,child.props},
)
    }

</ul>
</div>
