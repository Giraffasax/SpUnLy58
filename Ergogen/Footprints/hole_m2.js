module.exports = {
    params: {
      net: undefined
    },
    body: p => `
      (module HOLE_M2 (layer F.Cu) (tedit 5AB4F321) 
      ${p.at /* parametric position */}   
      ${'' /* footprint reference */}

      (fp_text reference "${p.ref}" (at 0 0) (layer Eco2.User) hide (effects (font (size 0.29972 0.29972) (thickness 0.07493))))
      (fp_text value VAL** (at 0 1.75) (layer Eco2.User) hide (effects (font (size 0.29972 0.29972) (thickness 0.07493))))
      (pad "" np_thru_hole circle (at 0 0) (size 2.2 2.2) (drill 2.2) (layers *.Cu *.Mask F.SilkS) (clearance 0.8)))
    `
}