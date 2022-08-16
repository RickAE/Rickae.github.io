function toggleMonoStereo(album)
{
    monoStereo = document.getElementById(album)
    if(monoStereo.style.display === 'block')
    {
        monoStereo.style.display = 'none'
    }
    else
    {
        monoStereo.style.display = 'block'
    }
}

const btnMobile = document.getElementById('btn-mobile')

btnMobile.addEventListener('click', toggleMenu)

function toggleMenu()
{
    const nav = document.getElementById('menu-principal')
    nav.classList.toggle('active')
}
