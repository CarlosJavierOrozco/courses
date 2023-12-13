<?php

class Fabrica {

    public function fabricarMesa($p_color, $p_patas)
    {
        return new Class($p_color, $p_patas) {
            private $color;
            private $patas;

            public function __construct($p_color, $p_patas)
            {
                $this->color = $p_color;
                $this->patas = $p_patas;
            }

            public function getColor()
            {
                return $this->color;
            }

            public function getPatas()
            {
                return $this->patas;
            }
        };
    }
    
}
