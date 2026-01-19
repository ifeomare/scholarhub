package dev.ifeomare.scholarships;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/api/v1/scholarships")
public class ScholarshipController {
    @Autowired
    ScholarshipService scholarshipService;

    @GetMapping
    public ResponseEntity<List<Scholarship>> getAllScholarships() {
        return new ResponseEntity<List<Scholarship>>(scholarshipService.allScholarships(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Scholarship>> getScholarship(@PathVariable int id) {
        return new ResponseEntity<Optional<Scholarship>>(scholarshipService.singleScholarship(id), HttpStatus.OK);
    }
}
