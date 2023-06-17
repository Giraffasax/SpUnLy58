module.exports = {
    params: {
      class: 'HOLE',
    },
    body: p => `
      (module HOLE_M2 (layer F.Cu) (tedit 5AB4F321) 
      ${p.at /* parametric position */}   
      ${'' /* footprint reference */}

      (fp_text reference "${p.ref}" (at 0 0) (layer Eco2.User) hide (effects (font (size 0.29972 0.29972) (thickness 0.07493))))
      (pad "1" thru_hole circle (at 0 0) (size 2.6 2.6) (drill 2.2) (layers "*.Cu" "*.Mask"))
      (pad "1" connect circle (at 0 0) (size 4.4 4.4) (layers "F.Cu" "F.Mask"))
      (pad "1" connect circle (at 0 0) (size 4.4 4.4) (layers "B.Cu" "B.Mask")))
    `
}