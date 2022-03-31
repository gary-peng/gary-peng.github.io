import React from 'react'

import BadgeBtn from './BadgeBtn'

export default function ProjectCard(props) {
    return (
        <div class="card mb-3">
            <div class="row no-gutters">
                <div class="col-md-4 my-auto">
                    <img class="card-img-top" src={props.project.img} />
                </div>

                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{props.project.name}</h5>
                        <p class="card-text"><small>{props.project.lang} | {props.project.tech}</small></p>
                        <p class="card-text">{props.project.desc}</p>

                        {
                            props.project.links.map((el) => {
                                return <BadgeBtn href={el.url} text={el.name} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
