import hello from './hello';
import world from './world';
import testi from './components/test';

testi()
document.getElementById('demo').innerHTML= `${hello}, ${world}!!!!!`;