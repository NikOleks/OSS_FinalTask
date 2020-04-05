<?php
/**
 * AutoBase default theme registration
 *
 * @author Nikolaichuk Oleksandr nikolaychuk.alexander@gmail.com
 * @copyright 2020 Nikolaichuk
 */

use \Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/AutoBase/default', __DIR__);
