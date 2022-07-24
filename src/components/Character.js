// Write your Character component here

const Character = (proppy) => {

    console.log(proppy);

    console.log(proppy.jedi.name)
    
    console.log(proppy.jedi.url)

    const {jedi} = proppy

    console.log(jedi)

    const {name, url} = jedi

    console.log(name)


return (
    <article>
        <h2>{name}</h2>
        <p>{`There is more info about them at ${url}`}</p>
    </article>
)

}

export default Character