const DisplayDate = () => {

    const today = (new Date()).toLocaleDateString('fr-be', {
        dateStyle: 'long'
    });

    return (
        <span>{today}</span>
    )
}

export default DisplayDate;