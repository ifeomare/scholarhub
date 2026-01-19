package dev.ifeomare.scholarships;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.net.URL;

@Document(collection = "scholarships")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Scholarship {
    @Id
    private ObjectId _id;
    private String name;
    private String organization;
    private String start_date;
    private String end_date;
    private String results;
    private String payouts;
    private URL website;
    private int id;
}
