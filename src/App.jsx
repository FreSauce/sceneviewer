import './App.css'

let arr = [
  'L', 'M', 'S', 'XL', 'XXL'
]

export default function App() {
  return (
    <main>
      {arr.map(el =>
        <a key={el} href={`
        intent://arvr.google.com/scene-viewer/1.0?file=https://github.com/FreSauce/sceneviewer/raw/main/public/${el}.glb&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;
      `}
        >Click for AR Size {el}<br /></a>
      )}
    </main>
  )
}
