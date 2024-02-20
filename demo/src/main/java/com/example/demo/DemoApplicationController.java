package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class DemoApplicationController {
    @RequestMapping(value = "/bustime", method = RequestMethod.GET)
    public String bus(Model model) {
        model.addAttribute("msg");
        return "bustime";
    }
}